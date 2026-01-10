import Text from "./core-components/text";
import Icon from "./core-components/icon";
import SunHorizon from "./assets/icons/sun-horizon.svg?react";
import CloudSun from "./assets/icons/cloud-sun.svg?react";
import UserSquare from "./assets/icons/user-square.svg?react";
import MoonStars from "./assets/icons/moon-stars.svg?react";
import CaretDown from "./assets/icons/caret-down.svg?react";
import CalendarBlank from "./assets/icons/calendar-blank.svg?react";
import CaretRight from "./assets/icons/caret-right.svg?react";
import CaretLeft from "./assets/icons/caret-left.svg?react";
import Trash from "./assets/icons/trash.svg?react";
import Button from "./core-components/button";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Text variant="body-lg-bold">Title Lg</Text>
        <Text variant="body-md-bold">Title Md</Text>
        <Text variant="body-sm-bold">Title Sm</Text>
        <Text variant="body-md">Title Md</Text>
        <Text>Title Sm</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={SunHorizon} className="fill-yellow" />
        <Icon svg={CloudSun} className="fill-yellow" />
        <Icon svg={UserSquare} className="fill-yellow" />
        <Icon svg={MoonStars} className="fill-yellow" />
        <Icon svg={CaretDown} className="fill-yellow" />
        <Icon svg={CalendarBlank} className="fill-yellow" />
        <Icon svg={CaretRight} className="fill-yellow" />
        <Icon svg={CaretLeft} className="fill-yellow" />
        <Icon svg={Trash} className="fill-yellow" />
      </div>

      <div className="w-80 flex flex-col gap-2">
        <Button>Agendar</Button>
        <Button disabled>Agendar</Button>
      </div>
    </div>
  );
}
