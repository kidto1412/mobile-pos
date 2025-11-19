import { Button, ButtonText } from "@/components/ui/button";
import ConfirmDeleteModal from "@/components/ui/ConfirmDeleteModal";
import { Input, InputField } from "@/components/ui/input";
import ListUserCard from "@/components/ui/ListUser";
import { useUser } from "@/hooks/user/useUser";
import { UserResponse } from "@/interfaces/user.interface";
import { useUserState } from "@/stores/user.store";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EmployeePage() {
  const { getUserPagination, deleteUser } = useUser();
  const [users, setUsers] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const userStore = useUserState();

  useEffect(() => {
    fetchUsers(1);
  }, []);

  const fetchUsers = async (pageNumber: number) => {
    const data = await getUserPagination({
      page: pageNumber,
      size: 10,
    });
    if (!data) return;
    if (pageNumber === 1) {
      setUsers(data.content);
    } else {
      setUsers((prev) => {
        const newUsers = data.content.filter(
          (u: any) => !prev.some((existing) => existing.id === u.id)
        );
        return [...prev, ...newUsers];
      });
    }
    setHasNextPage(data.hasNextPage);
    setPage(pageNumber);

    console.log("Users:", data);
  };
  const loadMore = () => {
    if (hasNextPage) {
      fetchUsers(page + 1);
    }
  };

  const handleEdit = (user: UserResponse | null) => {
    userStore.setUser(user);
    router.push(`/employee/form`);
  };

  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const handleDelete = (user: UserResponse) => {
    console.log("Delete user:", user.id);
    if (user) {
      setId(user.id);
    }
    setShow(true);
    // nanti bisa panggil endpoint delete
  };

  const onDelete = async () => {
    if (id.length == 0) {
      return;
    }
    await deleteUser(id);
    await fetchUsers(1);
    setShow(false);
  };

  const router = useRouter();
  return (
    <SafeAreaView>
      <View className="items-start px-5 mb-5">
        <Button
          variant="solid"
          size="md"
          action="primary"
          className="bg-blue-700"
          onPress={() => router.push("/employee/form")}
        >
          <ButtonText>Tambah Karyawan</ButtonText>
        </Button>
      </View>
      <View>
        <Input className="mx-5 bg-white rounded-lg" size="lg">
          <InputField placeholder="Search..." />
        </Input>

        <ScrollView
          className="mt-5"
          onScroll={(e) => {
            const { layoutMeasurement, contentOffset, contentSize } =
              e.nativeEvent;

            const isCloseToBottom =
              layoutMeasurement.height + contentOffset.y >=
              contentSize.height - 20;

            if (isCloseToBottom) loadMore();
          }}
          scrollEventThrottle={16}
        >
          <ListUserCard
            users={users}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </ScrollView>
      </View>

      {/* Delete Cpnfirm */}
      <ConfirmDeleteModal
        visible={show}
        title="Delete User"
        message="Are you sure you want to delete this user?"
        onCancel={() => setShow(false)}
        onConfirm={onDelete}
      />
    </SafeAreaView>
  );
}
