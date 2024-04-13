import "./index.css";

const PrimeCharacter = () => {
  return (
    <div className="primechar-container">
      <div className="container-1">
        <div className="inside-container">
          <p>what do you want to do?</p>
          <h2>Epic challenges await</h2>
        </div>
        <div className="container-prime-1">
          <img
            src="https://gencraft.com/api_resources/images/model_previews/core_image_v2_lora_amazing.jpg?noCors=2"
            alt="challenger"
            className="challenger"
          />
          <h3>puzzle prodigy</h3>
          <p>
            Greetings! i'm puzzle prodigy, ready to lead you through a maze of
            mind-boggling puzzles...
          </p>
          <p>Reply....</p>
        </div>
      </div>
      <div className="container-2">
        <img
          src="https://gencraft.com/api_resources/images/model_previews/core_image_v2_lora_cute_animals.jpg?noCors=2"
          alt="cat"
          className="challenger"
        />
        <p>micky</p>
        <p>welcome to your next challenge. can you escape in time? </p>
        <p>Reply...</p>
      </div>
    </div>
  );
};

export default PrimeCharacter;
