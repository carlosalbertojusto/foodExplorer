

import { ButtonContainer, Container, LogoContainer, Search, Menu } from './styles'
import { Input } from '../Input'
import { PiReceipt, PiSignOut, PiX } from 'react-icons/pi'
import { MdMenu, MdSearch } from 'react-icons/md'


import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import logo from '../../assets/logo.png'
import logoAdmin from '../../assets/logoAdmin.png'
import { useMediaQuery } from 'react-responsive'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
import COLORS from '../../styles/themes'
import { Button } from '../Button'
import { useState } from 'react'



export function Header({ handleSearchMeals }) {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()
  const [isOpen, setIsOpen] = useState()
  function handleSignOut() {
    navigation('/')
    signOut()
  }

  const isDesktop = useMediaQuery({ minWidth: DEVICE_BREAKPOINTS.LG })

  return (
    <Container>
      {!isDesktop && (
        <MdMenu size={30} color={COLORS.LIGHT_100} onClick={() => setIsOpen(true)} />
      )}
      {
        isOpen && !isDesktop && <Menu>
          <div className='container'>
            <div className='menuHeader'>
              <PiX size={30} onClick={() => setIsOpen(false)} />
              <p>Menu</p>
            </div>
            <div>
              <div className="search">
                <Input
                  id="search"
                  primary
                  icon={MdSearch}
                  placeholder="Busque por pratos ou ingredientes"
                  onChange={handleSearchMeals}
                />
              </div>

              <div className="newMeal">
                <button onClick={() => {
                  setIsOpen(false)
                  navigation('/newMeal')
                }}>
                  <p>Novo prato</p>
                </button>
              </div>
              <div className="logOut">
                <button onClick={() => {
                  setIsOpen(false)
                  handleSignOut()
                }}>
                  <p>Sair</p>
                </button>
              </div>
            </div>
          </div>

        </Menu>
      }
      <LogoContainer >
        {user.role === 'admin' && (

          <img src={logoAdmin} alt="" />
        )}
        {user.role === 'user' && (
          <img src={logo} alt="" />
        )}
      </LogoContainer>
      <Search>
        <Input
          id="search"
          icon={MdSearch}
          primary
          placeholder="Busque por pratos ou ingredientes"
          onChange={handleSearchMeals}
        />
      </Search>
      {!isDesktop && user.role !== 'admin' && (
        <PiReceipt size={30} color={COLORS.LIGHT_100} />
      )}

      {
        user.role === 'user' && (
          <ButtonContainer>
            <Button
              icon={PiReceipt}
              title={"Pedidos"}

            />
          </ButtonContainer>
        )
      }

      {
        user.role === 'admin' && (
          <ButtonContainer>
            <Button
              title={"Novo Prato"}
              onClick={() => navigation('/newMeal')}
            />
          </ButtonContainer>
        )
      }

      {
        isDesktop && (
          <PiSignOut size={30} color={COLORS.LIGHT_100} onClick={handleSignOut} />
        )
      }

    </Container>
  )
}
