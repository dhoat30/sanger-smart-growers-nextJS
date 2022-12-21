import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  display: block;
`;

const ImageStyle = styled(Image)`
  object-fit: cover;
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BgImage({ desktopImage, mobileImage }) {
  const [width, setWidth] = useState();
  const [height, setheight] = useState();

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }
    handleResize();

    // window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height && width > "800") {
    return (
      <Box>
        <ImageStyle
          priority
          src={desktopImage}
          width={width}
          height={height}
          layout="fill"
          quality="50"
        />
      </Box>
    );
  }
  if (width && height && width < "800") {
    return (
      <Box>
        <ImageStyle
          priority
          src={mobileImage}
          width={width}
          height={height}
          layout="fill"
          quality="50"

        />
      </Box>
    );
  }
  return null;
}

export default BgImage;
