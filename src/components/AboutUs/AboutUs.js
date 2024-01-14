import React from "react";
import "./AboutUs.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from '../../utils/accordion';
import {ChevronDownIcon} from "@heroicons/react/24/solid";

const AboutUs = () => {
  return (
    <section className="a-wrapper">
      <div className="paddings innerWidth flexCenter a-container">
        {/* left side */}
        <div className="a-left">
          <div className="image-container">
            <img src="./restaurant.jpg" alt="" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart a-right">
          <span className="primaryText">ABOUT US</span>
          <span className="secondaryText">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Veritatis, saepe, ducimus quos explicabo quas facere totam corporis sed.
          </span>

          <Accordion className="accordions"
          allowMultipleExpanded={false}
          preExpanded={[0]}
          >
            {
                data.map((item,i)=>{
                    return(
                        <AccordionItem className={`accordionItem`} key={i} uuid={i}>
                            <AccordionItemHeading>
                                <AccordionItemButton className="flexCenter accordionButton">
                                    <div className="flexCenter icon">{item.icon}</div>
                                    <span className="primaryText">{item.heading}</span>
                                    <div className="flexCenter icon">
                                        <ChevronDownIcon width={20} height={20}/>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <p className="secondaryText">{item.detail}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })
            }
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
