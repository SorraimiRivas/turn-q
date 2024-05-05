import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// // QUEUE LOGIC

// interface User {
// 	name: string;
// 	index: number;
// 	status: string;
// }

// export function createUser(name: string, index: number, status: string): User {
// 	return { name, index, status };
// }

// export function shuffleQueue<T>(array: T[]): void {
// 	let newArray: []

//   for (let i = array.length - 1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * (i + 1));
// 		[array[i], array[j]] = [array[j], array[i]];
// 	}
// }

// export function moveToNext(queue: UserQueue): void {
// 	queue.currentIndex = (queue.currentIndex + 1) % queue.users.length;
// }

// export function getNextUser(queue: UserQueue): User {
// 	let nextIndex = queue.currentIndex;
// 	let nextUser = queue.users[nextIndex];

// 	for (let i = 0; i < queue.users.length; i++) {
// 		if (queue.users[nextIndex].status === "ready") {
// 			break;
// 		}
// 		nextIndex = (nextIndex + 1) % queue.users.length;
// 		nextUser = queue.users[nextIndex];
// 	}

// 	queue.users.splice(nextIndex, 1);
// 	queue.users.push(nextUser);

// 	moveToNext(queue);

// 	return nextUser;
// }

// export function updateUserStatus(
// 	queue: UserQueue,
// 	index: number,
// 	newStatus: string,
// ): void {
// 	const user = queue.users.find((user) => user.index === index);
// 	if (user) {
// 		user.status = newStatus;
// 	}
// }

// interface UserQueue {
// 	users: User[];
// 	currentIndex: number;
// }

// const users: User[] = [
// 	createUser("User1", 1, "ready"),
// 	createUser("User2", 2, "not ready"),
// 	createUser("User3", 3, "not ready"),
// ];

// shuffleQueue(users);

// const userQueue: UserQueue = {
// 	users,
// 	currentIndex: 0,
// };

// const nextUser = getNextUser(userQueue);
// console.log("Next user:", nextUser);

// updateUserStatus(userQueue, 1, "not ready");
// updateUserStatus(userQueue, 2, "ready");

// const nextUserAfterCompletion = getNextUser(userQueue);
// console.log("Next user after completion:", nextUserAfterCompletion);
