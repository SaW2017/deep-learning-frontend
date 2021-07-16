import * as React from 'react';
import Axios from "axios";
import { ImageList } from '@material-ui/core';
import ImageListItem from '@material-ui/core/ImageListItem';
import {useEffect, useState} from "react";

export default function StandardImageList(props) {

    const [fullImageList, setFullImageList] = useState([]);

    useEffect(() => {
        try{
             Axios.get("http://localhost:3002/testDB?concept="+ props.filter + "&confidence=" + props.confidenceThreshold , {
            }).then((response) => {
                setFullImageList(response.data);
                console.log(response.data);
            });
        }catch (e) {
            console.log(e);
        }
    }, [props.filter, props.confidenceThreshold])


    return (
            <div>
                <p>Eingaben:</p>
                <p>Filter: {props.filter}</p>
                <p>Confidence: {props.confidenceThreshold}</p>
                <hr/>
                <p>Gefilterter Liste aus der DB:</p>



                <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                    {fullImageList.map((img) => (
                        <ImageListItem key={img.filepath}>
                            <img
                                srcSet={`${img.filepath}?w=164&h=164&fit=crop&auto=format 1x,
                ${img.filepath}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={img.filepath}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>


               {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>*/}
            </div>
        );
}

{/*{fullImageList.map((val, key) => {
                    return (
                        <div>
                            <p>{val}</p>
                        </div>);
                })}*/}

{/*{fullImageList.filter((val) => {
                    if(props.filter == ""){
                        return val;
                    }else if (val.name.toLowerCase().includes(props.filter.toLowerCase())){
                        return val;
                    }
                }).map((val,key) => {
                    return (
                        <div>
                            <p>{val.name}</p>
                        </div>);
                })}*/}



const itemData = [
    {
        img: 'C:/Tierschutz/a.jpg',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];