import { useParams } from "@tanstack/react-router";

export const Learn = () => {
  const { collectionId } = useParams({
    from: "/collections/$collectionId/learn",
  }); // Pobiera dynamiczny parametr collectionId

  return (
    <div>
      <h1>Nauka kolekcji: {collectionId}</h1>
      <p>To jest strona nauki dla kolekcji o ID: {collectionId}</p>
    </div>
  );
};
