export type UserType = "John" | "Kristian";

export interface ChatItemProps {
  user: UserType;
  text?: string;
  time: Date;
  file?: string;
}

interface MockItemProps {
  user: string;
  photoUrl: string;
}

export const UserMockData: { John: MockItemProps; Kristian: MockItemProps } = {
  John: {
    user: "John Doe",
    photoUrl: "https://picsum.photos/200/200",
  },
  Kristian: {
    user: "Kristian Pach",
    photoUrl: "https://picsum.photos/201/201",
  },
};
