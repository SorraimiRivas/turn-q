import {
  Activity,
  CheckCircle,
  Info,
  LayoutDashboard,
  ListStart,
  type LucideIcon,
  MoonStar,
  Settings,
  Sun,
  User2,
} from "lucide-react-native";
import { cssInterop } from "nativewind";

function interopIcon(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}

interopIcon(Info);
interopIcon(MoonStar);
interopIcon(Sun);
interopIcon(User2);
interopIcon(LayoutDashboard);
interopIcon(Settings);
interopIcon(ListStart);
interopIcon(Activity);
interopIcon(CheckCircle);

export {
  Info,
  MoonStar,
  Sun,
  LayoutDashboard,
  Settings,
  User2,
  ListStart,
  Activity,
  CheckCircle,
};
