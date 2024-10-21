import { useEffect, useState, memo, lazy, Suspense } from "react";
import { Card } from "react-bootstrap";
import CardPlaceHolder from "../../../Common/CardPlacholder";
import Content from "./Content";


type propsData = {
    value: any
}

const  ViewRepoData = (props: propsData) =>  {

    return (
        <Card className='mt-2' style={{ width: '80%' }}>
            <Card.Body>
                <Suspense fallback = {<CardPlaceHolder />}>
                   <Content {...props}/>
                </Suspense>
            </Card.Body>


        </Card>
    )
}



export default memo(ViewRepoData)