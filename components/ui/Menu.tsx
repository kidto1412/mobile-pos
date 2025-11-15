import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { Box } from "./box";
import { Text } from "./text";
import { VStack } from "./vstack";

interface ItemProps {
  label: string;
  icon: string;
  onPress?: () => void;
}

const MenuItem = ({ label, icon, onPress }: ItemProps) => (
  <Pressable onPress={onPress} className="w-1/2 p-2">
    <Box className="bg-white rounded-xl p-5 shadow-sm flex items-center justify-center">
      <Ionicons name={icon as any} size={32} color="#6C63FF" />
      <Text className="mt-2 text-base font-medium text-gray-700">{label}</Text>
    </Box>
  </Pressable>
);

export default function CategoryMenu() {
  const router = useRouter();
  const menu = [
    { label: "Penjualan", icon: "cart-outline", path: "/sales" },
    { label: "Penyimpanan", icon: "cube-outline", path: "/storage" },
    { label: "Pelanggan", icon: "people-outline", path: "/customer" },
    { label: "Pegawai", icon: "person-outline", path: "/employee" },
    { label: "Produk", icon: "albums-outline", path: "/product" },
    { label: "Laporan", icon: "bar-chart-outline", path: "/report" },
    { label: "Category", icon: "bar-chart-outline", path: "/category" },
    { label: "Store", icon: "bar-chart-outline", path: "/store" },
  ];

  return (
    <VStack className="p-2">
      <Box className="flex flex-row flex-wrap -mx-2">
        {menu.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            icon={item.icon}
            onPress={() => router.push(item.path as any)}
          />
        ))}
      </Box>
    </VStack>
  );
}
