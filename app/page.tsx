"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import './parallax.css'

export default function page() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);


    return(
      <>
        <div ref={ref} className="parallax">
          <motion.h1 className="title" style={{ y: textY }}> KOEKKOEK </motion.h1>
          <motion.div className="image-1" style={{ y: backgroundY }}> </motion.div>
          <motion.div className="image-2"> </motion.div>
        </div>

        <footer className="footer"> 
          <p> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten. </p>
        </footer>
        </>
    );
};