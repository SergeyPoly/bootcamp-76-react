interface Cat {
  id: number;
  name: string;
  age: number;
  email: string;
  image: string;
  available: boolean;
}

interface CatProfileProps {
  data: Cat;
}

export default function CatProfile({
  data: { age, email, image, name },
}: CatProfileProps) {
  return (
    <div>
      <img src={image} alt={name} width={320} />
      <p>{name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}
