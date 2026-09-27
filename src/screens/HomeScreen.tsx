import { BookGrid } from "@/components/BookGrid";
import { CategoryChips } from "@/components/CategoryChips";
import { FloatingCartButton } from "@/components/FloatingCartButton";
import { Header } from "@/components/Header";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BOOKS } from "../../data";
export default function HomeScreen({
    cartCount, onPressBook, onPressCart
}: { cartCount: number; onPressBook: (id: number) => void; onPressCart: () => void }) {
    return(
        <View style={styles.screen}>
            <Header></Header>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <Text style={styles.sectionTitle}>Danh Mục</Text>
                <CategoryChips></CategoryChips>
                <Text style={styles.sectionTitle}>Sách nổi bật</Text>
                <BookGrid books={BOOKS} onPressBook={onPressBook}></BookGrid>
            </ScrollView>
            <FloatingCartButton count={cartCount} onPress={onPressCart}></FloatingCartButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex : 1,
        backgroundColor: "#F8FAFC",
    },
    scroll:{
        flex:1
    },
    scrollContent:{
        padding : 16,
        paddingBottom:140
    },
    sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
    marginTop: 4,
  },
})