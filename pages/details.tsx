import { GetServerSideProps } from 'next';
import Fullcard from '../components/Fullcard';

type Props = {
  data: any; 
};

const DetailsPage: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Fullcard data={data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = context.query; 

  if (!data) {
    return {
      notFound: true,
    };
  }

  let deserializedData;
  try {
    deserializedData = JSON.parse(decodeURIComponent(data as string));
  } catch (error) {
    console.error('Failed to deserialize data:', error);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: deserializedData,
    },
  };
};

export default DetailsPage;
