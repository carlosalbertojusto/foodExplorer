import { Container, Content } from './styles';

import { useAuth } from '../../hooks/auth';


import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { PiPencilSimpleBold } from 'react-icons/pi';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoHeart } from "react-icons/io5";

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Quantity } from '../../components/Quantity';
import { api } from '../../services/api';
import { useMediaQuery } from 'react-responsive';

export function Meals({ data, mealId, imgMeal, ...rest }) {

    const { user } = useAuth();
    const isDesktop = useMediaQuery({ minWidth: 1024 })
    const navigate = useNavigate();

    function handleEdit(mealId) {
        navigate(`/edit/${mealId}`);
        
    }

    const [iconColor, setIconColor] = useState('white');
    const [currentIcon, setCurrentIcon] = useState(<AiOutlineHeart />);


    const handleIconClick = () => {
        const newColor = iconColor === 'white' ? '#750310' : 'white';

        const newIcon = currentIcon.type === AiOutlineHeart ? <IoHeart /> : <AiOutlineHeart />;

        setIconColor(newColor);
        setCurrentIcon(newIcon);
    }


    
    return (
        <Container>
            <a>

                {
                    user.role === 'user' &&
                    <div className="favorite">
                        {
                            currentIcon && React.cloneElement(currentIcon, {
                                size: 30,
                                color: iconColor,
                                onClick: handleIconClick,
                            })
                        }
                    </div>


                }

            </a>

            <a className="edit">

                {
                    user.role === 'admin' &&
                    <PiPencilSimpleBold
                        onClick={() => handleEdit(mealId)}

                    />
                }

            </a>
            <Content {...rest}>
                <img
                    src={imgMeal}
                    alt={data.title}
                />

                <p className="pTitle">
                    {data.title}
                    <IoIosArrowForward />

                </p>
                {
                    isDesktop && (
                        <p className="pDescription">
                            {data.description}
                        </p>
                    )
                }
                <p className="pPrice">
                    R$ {data.price}
                </p>

                {
                    user.role === 'user' &&
                    <Quantity number="01" />
                }


                {
                    user.role === 'user' &&
                    <Button
                        className="buttonInclude"
                        title="incluir"
                    />
                }


            </Content>
        </Container>
    );
}