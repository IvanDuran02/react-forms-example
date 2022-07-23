import styles from "../styles/Home.module.css";

import connectMongo from "../utils/connectMongo";
import Item from "../models/itemModels";

export default function Home({ items }) {
  return (
    <div className="body">
      <div className={styles.grid}>
        {items.map((item) => (
          <a href="https://nextjs.org/docs" key={item._id} className={styles.card}>
            <h2>{item.item}</h2>
            <img src={item.img} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  try {
    connectMongo(); // connecting to db

    const items = await Item.find(); // fetch items in db

    return {
      props: {
        items: JSON.parse(JSON.stringify(items)), // turn items into string then back into json
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true, // returns 404 if error
    };
  }
};

//
