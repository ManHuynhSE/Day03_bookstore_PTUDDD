import { BookGrid } from "@/components/BookGrid";
import { CategoryChips } from "@/components/CategoryChips";
import { FloatingCartButton } from "@/components/FloatingCartButton";
import { Header } from "@/components/Header";
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { BOOKS } from "../data";
export default function App() {
  const [cartCount, setCartCount] = useState(0)
    return (
        <View style={styles.screen}>
          <Header></Header>
          <ScrollView contentContainerStyle={styles.content}>
            {/* {BOOKS.map((book)=>(
              <BookRowCard key={book.id} book={book}></BookRowCard>
            ))} */}
            <CategoryChips></CategoryChips>
            <BookGrid books={BOOKS} onPressBook={(id) => console.log('Mở sách', id)}></BookGrid>
          </ScrollView>
          <FloatingCartButton count={cartCount} onPress={() => setCartCount((n) => n + 1)} />
          <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F8FAFC' },
content: { padding: 16, paddingBottom: 100 },
})