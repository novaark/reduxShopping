import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchGameSeries} from '../../Actions/dataAction'
import uniqid from 'uniqid'
import Loading from '../../Components/Loading'
import { 
    CategoryContainer,
    CategoryWrapper,
    CategoryItem,
    Item,
    ItemImg,
    ItemDescription,
    ItemPrice,
 } from './CategoryElements';
import CategoryBar from '../CategoryBar';

const Category = (props) => {


    useEffect(()=>{
        let gameSeries=props.match.params.id.split('_').join(' ');
        props.fetchGameSeries('https://www.amiiboapi.com/api/amiibo/?gameseries=' +gameSeries);

    },[props.match.params.id])

    if(props.data.pending===true){return <Loading></Loading>}
    
    return (
        <CategoryContainer>
            <CategoryBar/>
            <CategoryWrapper>
                <CategoryItem>
                    {props.data.gameSeriesFigures.map(item=>{
                        return (
                            <Item key={uniqid()}to={'/item/'+item.head+item.tail}>
                                <ItemImg src={item.image}></ItemImg>
                                <ItemDescription>TestItem</ItemDescription>
                                <ItemPrice>{item.gameSeries}</ItemPrice>
                            </Item>
                        )
                    })}
                </CategoryItem>
            </CategoryWrapper>
        </CategoryContainer>
    )
}
const mapStateToProps = state =>{
    return{
        data:state.dataReducer
    }
}

const mapDispatchToProps = dispatch => {
    return{ 
        fetchGameSeries:(url)=>{
            dispatch(fetchGameSeries(url));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category);