interface ILableProps {
  htmlFor: string;
  children: string;
}

export default function Label({ htmlFor, children }: ILableProps) {
  return (
    <label className="text-2xl text-secondary" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

{
  /* <Label htmlFor="username">이메일</Label>; */
}
