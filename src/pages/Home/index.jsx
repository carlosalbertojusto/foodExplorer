import { Header } from "../../components/Header"
import { Banner, BannerText, Container } from "./styles"
import { Section } from "../../components/Section"
import flavor from "../../assets/flavor.png"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useMediaQuery } from "react-responsive"

import { useNavigate } from "react-router-dom"
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Footer } from "../../components/Footer"
import { Meals } from "../../components/Meals"
import imagePlaceholder from "../../assets/placeholder.png"
register();
export const Home = () => {
    const [search, setSearch] = useState("");
    const [, setIngredients] = useState([]);
    const [meals, setMeals] = useState([]);
    const [dessert, setDessert] = useState([]);
    const [drink, setDrink] = useState([]);

    const navigate = useNavigate();
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }
    function handleSearchMeals(event) {
        const inputValue = event.target.value
        setSearch(inputValue)
    }
    useEffect(() => {
        async function fetchMeals() {
            const { data } = await api.get(`/meals?title=${search}`);
            setMeals(data.filter((meal) => meal.category === "meal"))
            setDessert(data.filter((dessert) => dessert.category === "dessert"))
            setDrink(data.filter((drink) => drink.category === "drink"))
        }

        fetchMeals();
    }, [search]);

    useEffect(() => {
        async function fetchIngredients() {
            const response = await api.get(`/ingredients`);
            setIngredients(response.data);
        }

        fetchIngredients();
    }, []);

    return (
        <Container>
            <div>
                <Header handleSearchMeals={handleSearchMeals} />

                <Banner className="gradient-container">
                    <img src={flavor} alt="Quitutes ao ar" />
                    <BannerText>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </BannerText>

                </Banner>

                <Section title="Refeições">
                    <Swiper
                        className="meals"
                        slidesPerView={isDesktop ? 3 : 2}
                        pagination={{ clickable: true }}
                        navigation={isDesktop ? true : false}
                        grab-cursor="true"

                    >

                        {
                            meals && meals.map((meal, category) => (
                                <SwiperSlide
                                    key={String(meal.id)}
                                >
                                    <Meals
                                        className="meal"
                                        imgMeal={meal.imgMeal ? `${api.defaults.baseURL}/files/${meal.imgMeal}` : imagePlaceholder}
                                        data={meal}
                                        mealId={meal.id}
                                        onClick={() => handleDetails(meal.id)}
                                        categoty={category}
                                    />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>

                </Section>

                <Section title="Sobremesas">

                    <Swiper
                        className="meals"
                        slidesPerView={isDesktop ? 3 : 2}
                        pagination={{ clickable: true }}
                        navigation={isDesktop ? true : false}

                    >

                        {
                            dessert && dessert.map((dessert) => (
                                <SwiperSlide key={String(dessert.id)}>
                                    <Meals
                                        className="meal"
                                        imgMeal={dessert.imgMeal ? `${api.defaults.baseURL}/files/${dessert.imgMeal}` : imagePlaceholder}
                                        data={dessert}
                                        mealId={dessert.id}
                                        onClick={() => handleDetails(dessert.id)}
                                    />
                                </SwiperSlide>

                            ))
                        }

                    </Swiper>

                </Section>



                <Section title="Bebidas">
                    <Swiper
                        className="meals"
                        slidesPerView={isDesktop ? 3 : 2}
                        pagination={{ clickable: true }}
                        navigation={isDesktop ? true : false}
                    >


                        {
                            drink && drink.map((drink) => (
                                <SwiperSlide key={drink.id}>
                                    <Meals
                                        className="meal"
                                        key={String(drink.id)}
                                        imgMeal={drink.imgMeal ? `${api.defaults.baseURL}/files/${drink.imgMeal}` : imagePlaceholder}
                                        data={drink}
                                        mealId={drink.id}
                                        onClick={() => handleDetails(drink.id)}
                                    />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>

                </Section>

                <Footer />
            </div>
        </Container>
    )
}