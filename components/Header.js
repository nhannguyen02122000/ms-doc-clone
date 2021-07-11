import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="gray"
        buttonType = "outline"
        rounded={true}
        iconOnly={true}
        ripple = "dark"
        className = "h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl"/>
      </Button>
      <Icon name="description" size="5xl" color="blue"/>
      <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>

      <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg 
                    focus-within:text-gray-600 focus-within:shadow-md">
        <Icon name="search" size="3xl" color="gray"/>
        <input type="text" placeholder="Search" className="flex-grow px-5 text-base bg-transparent outline-none"/>
      </div>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 md:ml-20 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" color="gray"/>
      </Button>

      <img
        loading="lazy"
        className="cursor-pointer h-11 w-11 rounded-full ml-2"
        src={"https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/150900040_3545779715490691_259681383762658360_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lPV32BFEELMAX8LOhWM&_nc_ht=scontent.fsgn3-1.fna&oh=23015e9b3a2a61200d4e818662bb95fe&oe=60F0F8C4"}
        alt=""
      />
    </header>
  );
}

export default Header;