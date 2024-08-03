import "./index.css";
import { useScroll, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  // creating smooth scroll using Lenis
  const lenis = useLenis(({ scroll }) => {});

  const element = useRef(null);

  // useScroll hook used to dermine the scroll position on the page. target means which element to target and offset means where to start and stop tracking.
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  // checking the scroll position value using console.log()
  useEffect(() => {
    // scrollYProgress.on("change", (e) => console.log(scrollYProgress.current));

    console.log(status.current);
  }, [scrollYProgress]);

  const [status, setStatus] = useState(scrollYProgress);

  window.addEventListener("scroll", (e) => {
    console.log(e);
  });
  return (
    <ReactLenis root>
      <div className="App">
        <header>
          <div className="logo">
            <div
              className="circle"
              style={{
                background: `${status.current === 1 ? "green" : "blue"}`,
              }}
            ></div>
          </div>
          <div className="links">
            <h3>WORKS</h3>
            <h3>EXHIBITION</h3>
            <h3>DATES</h3>
          </div>
        </header>
        <div className="space"></div>

        <motion.h1
          ref={element}
          style={{ opacity: scrollYProgress }}
          onScroll={() => console.log("working")}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          qui. Officia totam cumque iure facere dolores enim laboriosam dolore
          cum quidem! Nostrum, quam. Deleniti illo voluptate velit assumenda ex
          explicabo. Nihil fugiat alias vitae est, enim aut praesentium eos.
          Consequuntur rerum omnis tenetur perferendis dolores similique, at,
          illum nulla repellat inventore labore sint obcaecati. Doloribus
          repellendus magnam amet reiciendis laboriosam? Ducimus, exercitationem
          itaque aliquam quos sint accusantium, ut natus suscipit quod.
        </motion.h1>
        <div className="space"></div>
      </div>
    </ReactLenis>
  );
}

export default App;
