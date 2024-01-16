
import { Link, useNavigate, useParams } from "react-router-dom"
import COLORS from '../../styles/themes'
import { api } from "../../services/api";
import { useEffect, useState } from "react";

import { Button } from "../../components/Button";


import { Container, FormContainer, ImageMeals, Label, LinkContainer, } from "./styles";
import { Header } from "../../components/Header";
import { PiCaretLeft } from "react-icons/pi";
import imagePlaceholder from "../../assets/placeholder.png"
import { Footer } from "../../components/Footer"
import { useAuth } from "../../hooks/auth";


export const Details = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const { id } = useParams()
    const { user } = useAuth()
    useEffect(() => {
        async function fetchMeal() {
            const { data } = await api.get(`/meals/${id}`);
            setData(data);

        }

        fetchMeal();
    }, [id]);

    return (
        <Container>
            <Header />
            <FormContainer>
                <LinkContainer>
                    <Link className="back" to="/">
                        <PiCaretLeft size={30} color={COLORS.LIGHT_100} />
                    </Link>
                    <p>voltar</p>
                </LinkContainer>

                <div className="wrap">

                    <ImageMeals>
                        <img src={data.imgMeal ? `${api.defaults.baseURL}/files/${data.imgMeal}` : imagePlaceholder} alt="Imagem do prato" />
                    </ImageMeals>

                    <div className="contentWrap">
                        <Label>{data.title}</Label>

                        <div className="ingredients">
                            {
                                data.ingredients &&
                                data.ingredients.map((ingredient, index) =>
                                    <div key={String(index)}>
                                        <p>{ingredient.name}</p>
                                    </div>
                                )
                            }
                        </div>




                        <p className="description">
                            {data.description}
                        </p>

                        {
                            user.role === 'user' &&
                            <div className="buttonEdit">
                                <Button
                                    title="Incluir"
                                />
                            </div>
                        }
                        {
                            user.role === 'admin' &&
                            <div className="buttonEdit">
                                <Button
                                    title="Editar prato"
                                    onClick={() => navigate(`/edit/${data.id}`)}
                                />
                            </div>
                        }

                    </div>

                </div>

            </FormContainer>
            <Footer />
        </Container>
    )
}