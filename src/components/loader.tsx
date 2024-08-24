interface Props {}

export const Loader = (props: Props) => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="loading">animated icon</div>
      <h1 className="semi-bold animate-pulse text-center text-blue-400">
        Loading...
      </h1>
    </section>
  );
};
