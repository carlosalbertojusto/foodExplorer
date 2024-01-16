
import { Link, useNavigate } from "react-router-dom"
import COLORS from '../../styles/themes'
import { FiUpload } from 'react-icons/fi';
import { api } from "../../services/api";
import { useState } from "react";
import { TextArea } from '../../components/TextArea'
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Ingredients } from "../../components/Ingredients";
import { ButtonContainer, Container, FormContainer, FormControl, GroupContainer, ImageMeals, IngredientsContainer, Label, LinkContainer, SelectCategory, Title } from "./styles";
import { Header } from "../../components/Header";
import { PiCaretLeft } from "react-icons/pi";
import { useAuth } from "../../hooks/auth";
import { Footer } from "../../components/Footer"

export const NewMeal = () => {
    const [imgMeal, setImgMeal] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const { user } = useAuth()
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate()

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(tag => tag !== deleted));
    }

    function handleSelectedImage(e) {
        const file = e.target.files[0];

        if (file) {
            setImgMeal(file);
        }
    }

    function handleAddIngredient() {

        if (newIngredient === "") {
            alert("Insira conteúdo na tag, você não pode deixar o campo está vazio");
        } else {
            setIngredients(prevState => [...prevState, newIngredient]);
        }

        setNewIngredient("");
    }

    async function handleNewMeal() {
        if (!title) {
            return alert("Digite o nome do prato.")
        }

        if (newIngredient) {
            return alert("Você deixou um ingrediente sem salvar.");
        }

        try {

            if (imgMeal) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("imgMeal", imgMeal);

                const { data: meal_id } = await api.post("/meals", {
                    user_id: user.id,
                    category,
                    title,
                    price,
                    ingredients,
                    description
                });

                fileUploadForm.append("meal_id", meal_id);
                await api.patch("/meals", fileUploadForm);
            }
            alert("Prato criado com sucesso!");
            navigate("/");

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {

                alert("Não foi possível cadastrar o prato.");
            }
        }

    }

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
                    Adicionar prato
                </Title>
                <GroupContainer>
                    <ImageMeals>
                        <p>Imagem do prato</p>
                        <label htmlFor="imgMeal">
                            <FiUpload size={30} />
                            <input type="file" name="imgMeal" id="imgMeal" onChange={handleSelectedImage} />
                            <p>Selecione uma imagem</p>
                        </label>
                    </ImageMeals>
                    <FormControl>
                        <Label>Nome</Label>
                        <Input
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
                                >
                                    <option value="">
                                        Selecionar
                                    </option>
                                    <option value="meal">
                                        Refeições
                                    </option>
                                    <option value="dessert">
                                        Sobremesas
                                    </option>
                                    <option value="drink">
                                        Bebidas
                                    </option>

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
                            placeholder="R$ 00,00"
                            type="number"
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                </GroupContainer>

                <FormControl>
                    <Label>Descrição</Label>
                    <TextArea
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={e => setDescription(e.target.value)}
                    />
                </FormControl>
                <ButtonContainer>
                    <Button
                        className="buttonSave"
                        title="Salvar alterações"
                        onClick={handleNewMeal}
                    />
                </ButtonContainer>
            </FormContainer>
            <Footer />
        </Container>
    )
}