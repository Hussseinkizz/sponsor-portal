interface Props {
  children: React.ReactNode;
}

export const PageWrapper = (props: Props) => {
  return (
    <section className="flex w-full flex-col items-start justify-start gap-4 px-4">
      {props.children}
    </section>
  );
};
