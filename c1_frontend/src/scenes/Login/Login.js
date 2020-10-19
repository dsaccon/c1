import React from 'react'
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import { Button } from "@material-ui/core";
import { CorrosionOneLoginIcon } from "../../components/Icons/CorrosionOneLoginIcon";

export const Login = () => {
  return (
    <>
      <AutoRotatingCarousel label="LOG IN" mobile open>
        <Slide media={<CorrosionOneLoginIcon/>} />
        <Slide media={<div>Screen 1</div>} />
        <Slide media={<div>Screen 2</div>} />
        <Slide media={<div>Screen 3</div>} />
        <Slide media={<div>Screen 4</div>} />
      </AutoRotatingCarousel>
    </>
  )
}