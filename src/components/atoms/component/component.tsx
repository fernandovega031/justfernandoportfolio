

type ComponentProps = {
  src: string;
  alt: string;
};

const Component: React.FC<ComponentProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
    />
  );
};

export default Component;