import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import NormalItem from 'data/NormalItem';

interface Props {
    normal?: number
}

const HoverDiv = styled.div`
    display: none;
    position: absolute;
    bottom: 60px;
    left: -25px;
    width: 200px;
    background: ${oc.gray[8]};
`

const HoverWrapper = styled.div`
    padding: 10px;
`

const HoverName = styled.p`
    color: ${oc.yellow[7]};
    margin: 0;
`

const HoverEffect = styled.p`
    color: white;
    margin: 0;
`

const HoverNormalEffect = styled.p`
    color: ${oc.gray[2]};
    margin: 0;
`

const Wrapper = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    margin: 1px;
    &:hover{
        ${HoverDiv} {
            display: block;
        }
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${(props: Props) =>props.normal?`border-radius:50%`:``}
`

interface ItemProps {
    item?: {
        image?: string,
        name?: string | null,
        effect?: string,
        combination?: Object
    } | null;
    index: number[];
}

const Item = ({item, index}: ItemProps) => {
    if(item == null){
        return (
            <Wrapper />
        )
    }
    return (
        <Wrapper>
            <HoverDiv>
                <HoverWrapper>
                    <HoverName>{item.name}</HoverName>
                    <HoverEffect>{item.effect}</HoverEffect>
                    <HoverNormalEffect>{(index[1] !== 0 && index[1] !== 8)?NormalItem[index[1]-1].effect:``}</HoverNormalEffect>
                    <HoverNormalEffect>{(index[0] !== 0 && index[0] !== 8)?NormalItem[index[0]-1].effect:``}</HoverNormalEffect>
                </HoverWrapper>
            </HoverDiv>
            <Img src={item?item.image:``} normal={index[0] === 0 || index[1] === 0?1:0}/>
        </Wrapper>
    );
};

export default Item;