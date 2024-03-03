import style from "../Description/Description.module.css";

const Description = () => {
  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p className={style.easteregg}>
        There is easteregg in homework. It is necessary to enter the correct
        number in good bad and neutral. The hint is a number from 0 to 3. Try
        it. It’s easy.
      </p>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
