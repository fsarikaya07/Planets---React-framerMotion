import React, { useEffect, useState } from "react";

const useRings = (planetType) => {
  const [ringSpecs, setRingSpecs] = useState({
    orbit: {
      width: 0,
      height: 0,
      borderWidth: 0,
      top: null,
      left: null,
      fix: {
        width: 0,
        height: 0,
        top: null,
        left: null,
      },
    },
    detail: {
      width: 0,
      height: 0,
      borderWidth: 0,
      top: null,
      left: null,
      fix: {
        width: 0,
        height: 0,
      },
    },
    navbar: {
      width: 0,
      height: 0,
      borderWidth: 0,
      top: null,
      left: null,
    },
  });
  useEffect(() => {
    switch (planetType) {
      case "saturn":
        return setRingSpecs({
          orbit: {
            width: 12,
            height: 20,
            borderWidth: 3,
            top: -20,
            left: 2,
            fix: {
              width: 4.7,
              height: 6,
              top: 2,
              left: 4.1,
            },
          },
          detail: {
            width: 50,
            height: 40,
            borderWidth: 9,
            top: -45,
            left: -75,
            fix: {
              width: 20,
              height: 10,
            },
          },
          navbar: {
            width: 0,
            height: 0,
            borderWidth: 0,
            top: null,
            left: null,
          },
        });
      case "uranus":
        return setRingSpecs({
          orbit: {
            width: 12,
            height: 20,
            borderWidth: 3,
            top: -50,
            left: -10,
            fix: {
              width: 2,
              height: 9,
              top: 0.5,
              left: 3.5,
            },
          },
          detail: {
            width: 50,
            height: 35,
            borderWidth: 5,
            top: -35,
            left: -75,
            fix: {
              width: 10,
              height: 20,
            },
          },
          navbar: {
            width: 0,
            height: 0,
            borderWidth: 0,
            top: null,
            left: null,
          },
        });
    }
  }, [planetType]);

  return { ringSpecs };
};

export default useRings;
