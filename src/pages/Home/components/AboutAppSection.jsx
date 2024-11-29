import React from "react";

const AboutAppSection = () => {
  return (
    <div
      className="m-0 bg-gradient-to-r from-white to-light-blue w-screen h-screen flex relative"
      id="ab-section"
    >
      <div>
        <h2 className="text-4xl p-12 font-bold">
          Make small steps every day to improve your mental health! 😁
        </h2>
        <div className="p-10 text-xl w-2/3">
          <h3>Why it is important?</h3>
          <br />
          <p>
            Taking small steps every day to improve mental health is important
            because it helps build positive habits, reduce stress, strengthen
            emotional resilience, and increase self-awareness. Regularly caring
            for your mental well-being allows you to cope better with
            challenges, prevent burnout, and create lasting foundations for
            long-term well-being.
          </p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 574 681"
        className="absolute bottom-0 left-2/3 transform -translate-x-1/2 w-10/12 h-10/12 lg:w-120 lg:h-3/4"
        fill="none"
      >
        <path
          d="M419.123 261.931L418.256 269.381L423.506 269.992L425.847 265.253L419.123 261.931ZM551.727 5.52553C550.399 1.6022 546.141 -0.501353 542.218 0.82706L478.284 22.4754C474.36 23.8039 472.257 28.0613 473.585 31.9846C474.914 35.908 479.171 38.0115 483.094 36.6831L539.925 17.4401L559.168 74.2706C560.496 78.1939 564.754 80.2975 568.677 78.9691C572.6 77.6406 574.704 73.3832 573.375 69.4599L551.727 5.52553ZM58.5958 392.58L63.5382 386.939L53.5412 378.18L51.2118 391.265L58.5958 392.58ZM200.123 516.58L195.181 522.221L207.623 533.122L207.623 516.58L200.123 516.58ZM200.123 376.505L207.623 376.505L200.123 376.505ZM200.123 236.431L200.991 228.981L192.623 228.007L192.623 236.431L200.123 236.431ZM309.623 249.181L308.756 256.631L309.623 249.181ZM425.847 265.253L551.347 11.2532L537.899 4.60857L412.399 258.609L425.847 265.253ZM15.0072 680.245L65.9797 393.894L51.2118 391.265L0.239307 677.617L15.0072 680.245ZM53.6533 398.221L195.181 522.221L205.066 510.938L63.5382 386.939L53.6533 398.221ZM207.623 516.58L207.623 376.505L192.623 376.505L192.623 516.58L207.623 516.58ZM207.623 376.505L207.623 236.431L192.623 236.431L192.623 376.505L207.623 376.505ZM199.256 243.881L308.756 256.631L310.491 241.731L200.991 228.981L199.256 243.881ZM308.756 256.631L418.256 269.381L419.991 254.481L310.491 241.731L308.756 256.631Z"
          fill="#23803E"
        />
      </svg>
    </div>
  );
};

export default AboutAppSection;