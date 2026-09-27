import HomeScreen from "@/screens/HomeScreen";
import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { BOOKS } from "../data";
// import { HomeScreen } from "../src/screens/HomeScreen";
import BookDetail from "@/screens/BookDetail";
export default function App() {
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const selectedBook = BOOKS.find((b) => b.id === selectedBookId) ?? null;
  return (
     <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        
         {selectedBook ? (
          <BookDetail
            book={selectedBook}
            onBack={() => setSelectedBookId(null)}
            onAddToCart={() => setCartCount((n) => n + 1)}
          />
        ) : (
          <HomeScreen
            cartCount={cartCount}
            onPressBook={(id) => setSelectedBookId(id)}
            onPressCart={() => console.log('Xem giỏ hàng (thuộc Giờ 5)')}
          />
        )}

      
      </View>
      <StatusBar barStyle="default"/>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FFFFFF' },
  body: { flex: 1 },
});