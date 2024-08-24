interface Props {
  image: string;
  name: string;
}

const Gallery = (props: Props) => {
  return (
    <section className="mt-4 grid w-full grid-cols-1 gap-2 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 overflow-hidden bg-lime-200"
        >
          <img
            src={props.image}
            alt={props.name}
            className="h-96 w-full rounded-t-md transition ease-in-out hover:scale-105 hover:grayscale"
          />
          <div className="flex items-center justify-between p-2">
            <span>photos shooting day</span>
            <span className="text-red-700">4 Aug 2024</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
