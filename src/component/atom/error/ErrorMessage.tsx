interface Props {
  message: string;
}
const ErrorMessage = ({ message }: Props) => {
  return <p className="text-red-500 text-xs">{message}</p>;
};

export default ErrorMessage;
