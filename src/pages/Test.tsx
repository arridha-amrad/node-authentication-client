import Button from '../components/Button';
import ButtonGoogle from '../components/ButtonGoogle';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';

const Test = () => {
  return (
    <Container>
      <div className="flex flex-col h-screen min-h-screen ">
        <div className="flex  flex-auto justify-center items-center ">
          <div className="w-96 h-160 h flex lg:w-224 flex-shrink-0 shadow-xl">
            <div className="flex flex-col w-full lg:w-1/2 border rounded-l-lg">
              <div className="space-y-4 h-full justify-center p-10 w-full border flex flex-col ">
                <Header text="Register" />
                <Input label="Email" type="text" />
                <Input label="Email" type="text" />
                <Input label="Email" type="text" />
                <Button isFullWidth={true} label="Register" type="primary" />
                <ButtonGoogle />
              </div>
            </div>
            <div className="bg-purple-500 rounded-r-lg min-h-full hidden lg:block max-h-fit w-1/2 min-w-fit">
              <img
                src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                className=" object-center w-full h-full rounded-r-lg"
              />
            </div>
          </div>
        </div>
        <div className="first:bg-pink-500 min-h-fit">
          <div className="h-24 text-center align-middle w-full space-y-3">
            <p>
              created by{' '}
              <span className=" font-semibold ml-1">Arridha Amrad</span>
            </p>
            <p className="text-sm">arridhaamrad@gmail.com</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Test;
