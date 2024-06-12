import Counter from "@/components/Counter";
import Image from "next/image";
import StoreProvider from "./StoreProvider";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <StoreProvider>
      <div>
        <Navbar />
        <h1>Using Redux!</h1>
        <Counter />
      </div>
    </StoreProvider>
  );
}
