import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  return (
    <main className="bg-base-200">
      <div className="hero min-h-screen bg-base-200">
        <div className="max-w-5xl mx-auto hero-content flex-col gap-12 lg:flex-row">
          <img className="max-w-sm rounded-lg shadow-2xl" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/v1700510527/my-daisy-app/benjamin-recinos-UMQY2ZmLqcQ-unsplash_cyxro0.jpg" />
          <div>
            <h1 className="text-5xl font-bold">Spacesuit</h1>
            <p className="py-6">Introducing the Galactic Guardian Spacesuit, the epitome of cutting-edge technology and unparalleled protection for your cosmic adventures. Designed with precision and innovation, this spacesuit is crafted to safeguard astronauts in the harshest environments beyond Earth.</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto my-12">
        <p>
          Featuring a state-of-the-art, lightweight exoskeleton, the Galactic Guardian Spacesuit provides exceptional mobility without compromising on durability. The suit's advanced life support system ensures a constant and reliable supply of oxygen, while its temperature regulation technology keeps astronauts comfortable in the extremes of space.
        </p>
      </div>
      <div className="max-w-2xl mx-auto my-12">
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" defaultChecked /> 
          <div className="collapse-title text-xl font-medium">
            Product Info
          </div>
          <div className="collapse-content"> 
            <p>Equipped with a high-visibility helmet boasting an anti-glare visor, our spacesuit ensures crystal-clear vision for critical mission tasks. The suit's multi-layered shielding defends against radiation, micrometeoroids, and temperature fluctuations, offering a comprehensive defense against the hazards of outer space.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" /> 
          <div className="collapse-title text-xl font-medium">
            Specifications
          </div>
          <div className="collapse-content"> 
            <p>Designed for ease of use, the Galactic Guardian Spacesuit incorporates intuitive controls and a modular interface, allowing astronauts to adapt to mission-specific requirements effortlessly. The suit's sleek design not only enhances functionality but also contributes to a futuristic aesthetic, setting a new standard for space exploration fashion.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-12">
          <input type="radio" name="my-accordion-3" /> 
          <div className="collapse-title text-xl font-medium">
            Warning
          </div>
          <div className="collapse-content"> 
            <p>Removing helmet in space may cause discomfort.</p>
          </div>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
      </div>

    </main>
  )
}
