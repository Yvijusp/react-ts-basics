interface IProps {
  post: {
    title: string;
    body: string;
    id: number;
    userId: number;
  };
}

const Post = ({ post }: IProps) => {
  const { title, body } = post;
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;
