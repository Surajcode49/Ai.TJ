import React from "react";

function Course() {
  return (
    <div>
      {/* <nav>
        <a href="#">Home</a>
        <a href="#">College Reviews</a>
        <a href="#">Courses</a>
        <a href="#">Study Materials</a>
        <a href="#">Login/SignUp</a>
      </nav> */}
      <main>
        <section>
          <h1>OUR-COURSES</h1>
          <div className="video">
            <iframe
              width="500"
              height="50"
              src="https://www.youtube.com/embed/C6YtPJxNULA"
              title="All About Machine Learning &amp; Deep Learning in 2024 🔥"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="500"
              height="200"
              src="https://www.youtube.com/embed/51Ihlt5tHeE"
              title="AI Engineer Roadmap | How I&#39;d Learn AI in 2024"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="500"
              height="200"
              src="https://www.youtube.com/embed/pTOsiigFovU"
              title="How we can learn about AI? – [Hindi] – Quick Support"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <br />
          </div>

          <br />
          <br />
          <div className="video2">
            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/fdXB89WwtU0"
              title="ChatGPT MasterClass 🔥| Prompt Engineering Course in Hindi | Basic to Advanced | ChatGPT &amp; AI Skills"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/vJefOB8kec8"
              title="The Truth about Artificial Intelligence and ChatGPT | Dhruv Rathee"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/rJ1Qao09CFI"
              title="What is AI? Artificial Intelligence Explained"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </section>
        <section>
        <div className="video2">
          <iframe
           width="500"
           height="300"
            src="https://www.youtube.com/embed/rg_B7nD6AOs"
            title="Yun Rahu Chup Kuchh Bhi Na Bolu | Slowed and Reverb | Lo-Fi"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
           width="500"
           height="300"
            src="https://www.youtube.com/embed/zGJ5BlbKfLM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
          width="500"
          height="30%"
            src="https://www.youtube.com/embed/j0biLzzJ2XQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          </div>
        </section>
        <section>
          <h2>Study Material</h2>
          <a target="_blank" href="Notes/Surface Chemistry  Complete NCERT.pdf">
            <img
              src="Notes/Surface Chemistry  Complete NCERT_pages-to-jpg-0001.jpg"
              alt=""
              width="24%"
              height="60%"
            />
          </a>
          <a
            target="_blank"
            href="Notes/Solid State New Complete Chapter Notes.pdf"
          >
            <img
              src="Notes/Solid State New Complete Chapter Notes-01.jpg"
              alt=""
              width="24%"
              height="60%"
            />
          </a>
          <a target="_blank" href="Notes/Electrochemistry  Complete NCERT.pdf">
            <img
              src="Notes/Electrochemistry  Complete NCERT-01.jpg"
              alt=""
              width="24%"
              height="60%"
            />
          </a>
          <a target="_blank" href="Notes/Coordination Compound 3.pdf">
            <img
              src="Notes/Coordination Compound 3-page-001 (1).jpg"
              alt=""
              width="24%"
              height="60%"
            />
          </a>
        </section>
      </main>
    </div>
  );
}

export default Course;
