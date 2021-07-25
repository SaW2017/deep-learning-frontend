import * as React from 'react';
import Axios from "axios";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import {useEffect, useImperativeHandle, useState, forwardRef} from "react";
import {Grid} from "@material-ui/core";

function StandardImageList(props, ref) {

    const [fullImageList, setFullImageList] = useState([]);
    const [apiCall, setApiCall] = useState("http://localhost:3002/find");

    useImperativeHandle(ref, () => ({
        updateApiRequest(searchbarValue, confidenceThreshold) {
            setApiCall(`http://localhost:3002/filter?concept=${searchbarValue}&confidence=${confidenceThreshold}`);
        }
    }), []);

    useEffect(() => {
        try {
            Axios.get(apiCall, {}).then((response) => {
                setFullImageList(response.data);
                console.log(response.data);
            });
        } catch (e) {
            console.log(e);
        }
    }, [apiCall])

    return (
        <div>
          {/*  {apiCall}
            <p>Filter: {props.searchbarValue}</p>
            <p>Confidence: {`${props.confidenceThreshold[0]} -- ${props.confidenceThreshold[1]}`}</p>
           */}
            {fullImageList.length? 'Bilder vorhanden': 'nicht vorhanden'}
           <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
                {fullImageList.map((img) => (
                    <ImageListItem key={img._id}>
                        <img
                            src={`images/${img.file_path}/${img.keyframe_id}`}
                            alt={img.file_path}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={<span>{img.classifier.charAt(0).toUpperCase() + img.classifier.slice(1)}</span>}
                            subtitle={<span>
                                {typeof(img.concept_confidence[0]) !== 'undefined'?
                                    img.concept_confidence[0].concept.slice(0, -1) +' ('+ img.concept_confidence[0].confidence.toFixed(3) +')'
                                    : 'No 1st Concept'} <br/>
                                {typeof(img.concept_confidence[1]) !== 'undefined'?
                                    img.concept_confidence[1].concept.slice(0, -1) +' ('+ img.concept_confidence[1].confidence.toFixed(3) +')'
                                    : 'No 2nd Concept'} <br/>
                                {typeof(img.concept_confidence[2]) !== 'undefined'?
                                    img.concept_confidence[2].concept.slice(0, -1) +' ('+ img.concept_confidence[2].confidence.toFixed(3) +')'
                                    : 'No 3rd Concept'}
                            </span>}
                            position="bottom"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

export default forwardRef(StandardImageList)