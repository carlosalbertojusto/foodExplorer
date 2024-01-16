
import { Link, useNavigate, useParams } from "react-router-dom"
import COLORS from '../../styles/themes'
import { FiUpload } from 'react-icons/fi';
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { TextArea } from '../../components/TextArea'
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Ingredients } from "../../components/Ingredients";
import { ButtonContainer, Container, FormContainer, FormControl, GroupContainer, ImageMeals, IngredientsContainer, Label, LinkContainer, SelectCategory, Title } from "./styles";
import { Header } from "../../components/Header";
import { PiCaretLeft } from "react-icons/pi";
import { Footer } from "../../components/Footer"

export const Edit = () => {
    const { id } = useParams()

    const [data, setData] = useState([]);
    const [imgMeal, setImgMeal] = useState("");
    const [fileName, setFileName] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [, setUpdatedImage] = useState(null);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate()

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(tag => tag !== deleted));
    }

    let formattedName = data.category;

    if (formattedName == "meal") {
        formattedName = "Refeições"
    }

    if (formattedName == "dessert") {
        formattedName = "Sobremesas"
    }

    if (formattedName == "drink") {
        formattedName = "Bebidas"
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        setImgMeal(file);
        setUpdatedImage(file);
        setFileName(file.name);
    }

    async function handleRemove() {
        const confirm = window.confirm("Deseja realmente remover o prato?");

        if (confirm) {
            await api.delete(`/meals/${id}`);
            navigate(-1);
        }
    }

    async function handleUpdate() {

        const titleNew = title !== data.title ? title : data.title;
        const categoryNew = category !== data.category ? category : data.category;
        const priceNew = price !== data.price ? price : data.price;
        const descriptionNew = description !== data.description ? description : data.description;

        const ingredientsNew = ingredients != data.ingredients ? ingredients : data.ingredients;

       

        const imgMealNew = imgMeal != data.imgMeal ? imgMeal : data.imgMeal;

        try {

            if (imgMealNew) {

                const fileUploadForm = new FormData();
                fileUploadForm.append("imgdish", imgMealNew);

                await api.put(`/dishes/${id}`, {
                    title: titleNew,
                    category: categoryNew,
                    price: priceNew,
                    description: descriptionNew,
                    ingredients: ingredientsNew,

                });

                fileUploadForm.append("meal_id", id);
                await api.patch("/dishes", fileUploadForm);

            }

            if (!category) {
                return alert("Escolha uma categoria")
            }

            await api.put(`/meals/${id}`, {

                title: titleNew,
                category: categoryNew,
                price: priceNew,
                description: descriptionNew,
                ingredients: ingredientsNew,


            });

          
            alert("Prato alterado com sucesso!");
            navigate("/");

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível editar o prato.");
               
            }
        }
    }

    function handleAddIngredient() {

        if (newIngredient === "") {
            alert("Insira o ingrediente, você não pode deixar o campo está vazio");
        } else {
            setIngredients(prevState => [...prevState, newIngredient]);
        }

        setNewIngredient("");
    }

    useEffect(() => {
        async function fetchMeal() {
            const { data } = await api.get(`/meals/${id}`);
            setData(data);
            setIngredients(data.ingredients.map(i => i.name))
            setCategory(data.category)
            setPrice(data.price)
            setTitle(data.title)
            setDescription(data.description)
            data.imgMeal ?? setImgMeal(data.imgMeal)
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
                <Title>
                    Editar prato
                </Title>
                <GroupContainer>
                    <ImageMeals>
                        <p>Imagem do prato</p>
                        <label htmlFor="imgMeal">
                            <FiUpload size={30} />
                            <input type="file" name="imgMeal" id="imgMeal" onChange={handleImageChange} />
                            <p>{data.imgMeal || "Selecione imagem" || fileName}</p>
                        </label>
                    </ImageMeals>
                    <FormControl>
                        <Label>Nome</Label>
                        <Input
                            defaultValue={data.title}
                            placeholder="Ex.: Salada Ceasar"
                            onChange={e => setTitle(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <Label>Categoria</Label>
                        <SelectCategory
                            onChange={e => setCategory(e.target.value)}
                        >
                            <div className="input-select">
                                <select
                                    value={data.category}
                                >
                                    <option value={data.category}>
                                        {formattedName}
                                    </option>
                                    {
                                        data.category !== 'meal' &&
                                        <option value="meal">
                                            Refeições
                                        </option>
                                    }
                                    {
                                        data.category !== 'dessert' &&
                                        <option value="dessert">
                                            Sobremesas
                                        </option>
                                    }
                                    {
                                        data.category !== 'drink' &&
                                        <option value="drink">
                                            Bebidas
                                        </option>
                                    }

                                </select>
                            </div>
                        </SelectCategory>
                    </FormControl>
                </GroupContainer>
                <GroupContainer>

                    <FormControl>
                        <Label>Ingredientes</Label>
                        <IngredientsContainer>
                            <div className="ingredients">

                                {
                                    ingredients.map((ingredient, index) =>
                                        <Ingredients
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={() => { handleRemoveIngredient(ingredient) }}
                                        />
                                    )
                                }
                                <Ingredients
                                    isNew
                                    placeholder="Adicionar"
                                    onChange={e => setNewIngredient(e.target.value)}
                                    value={newIngredient}
                                    onClick={handleAddIngredient}
                                />
                            </div>
                        </IngredientsContainer>
                    </FormControl>

                    <div className="price">
                        <Label>Preço</Label>
                        <Input
                            defaultValue={data.price}
                            placeholder="R$ 00,00"
                            type="number"
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                </GroupContainer>

                <FormControl>
                    <Label>Descrição</Label>
                    <TextArea
                        defaultValue={data.description}
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={e => setDescription(e.target.value)}
                    />
                </FormControl>
                <ButtonContainer>
                    <Button
                        className="buttonRemove"
                        title="Excluir Prato"
                        onClick={handleRemove}
                    />
                    <Button
                        className="buttonSave"
                        title="Salvar alterações"
                        onClick={handleUpdate}
                    />
                </ButtonContainer>

            </FormContainer>
            <Footer />
        </Container>
    )
}