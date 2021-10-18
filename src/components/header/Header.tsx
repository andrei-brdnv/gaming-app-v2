import React, { FC } from "react";
import styled from "styled-components";
import { Container } from "../globals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import { HeaderSearch } from "./HeaderSearch";

export const Header: FC = () => {
    return (
        <SHeader>
            <Container>
                <HeaderItem>
                    <FontAwesomeIcon icon={faDove} />
                </HeaderItem>
                <HeaderItem>
                    <HeaderSearch />
                </HeaderItem>

            </Container>
        </SHeader>
    );
};


const SHeader = styled.header`
  width: 100%;
  z-index: 10;
  background-color: palevioletred;
`

const HeaderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`