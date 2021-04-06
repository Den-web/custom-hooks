import { useLocalStorage } from "@rehooks/local-storage";

export function UseLocalStorage() {
  const [name, setName, deleteName] = useLocalStorage("name");

  return (
    <div>
      <div>Key: "name" | Value: "{name}"</div>
      <div>
        <button onClick={() => setName("nnamdi")}>Set Name</button>
        <button onClick={deleteName}>Delete Value</button>
      </div>
    </div>
  );
}
