// GIỜ 5 — Tổng hợp: Bottom Tab Layout & Hoàn thiện ứng dụng
// Minh hoạ riêng: Bài 1 (TabBar) + Bài 2 (CartScreen, đủ 3 vùng: cuộn / tổng tiền
// cố định / tab bar cố định). 3 tab còn lại (Trang chủ, Danh mục, Tài khoản) chỉ để
// TabBar có đủ 4 mục thật như đề bài — nội dung của chúng thuộc Giờ 2 và Giờ 4,
// nên ở đây chỉ để placeholder, tránh trùng lặp code với project gio2/gio4.
import TabBar, { TabKey } from '@/components/TabBar';
import { CartScreen } from '@/screens/CartScreen';
import HomeScreen from '@/screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BOOKS, CART_ITEMS } from '../../data';


export default function App() {
     const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
      const [cartCount, setCartCount] = useState(0);
      const selectedBook = BOOKS.find((b) => b.id === selectedBookId) ?? null;
  const [activeTab, setActiveTab] = useState<TabKey>('cart');
    const renderScreen = () =>{
        switch(activeTab){
            case 'home': return <HomeScreen
                        cartCount={cartCount}
                        onPressBook={(id) => setSelectedBookId(id)}
                        onPressCart={() => console.log('Xem giỏ hàng (thuộc Giờ 5)')}
                      />
            case 'category':
            case 'cart': return <CartScreen items={CART_ITEMS} />
            case 'account':
        }
    }
  return (
    <SafeAreaView style={styles.root}>

      <View style={styles.body}>
       {renderScreen()}
        <TabBar active={activeTab} onChange={setActiveTab} />
      
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function Placeholder({ tab }: { tab: TabKey }) {
  const note: Record<TabKey, string> = {
    home: 'Nội dung tab "Trang chủ" thuộc Giờ 4 — xem project bookstore-online-gio4.',
    category: 'Nội dung tab "Danh mục" thuộc Giờ 2 — xem project bookstore-online-gio2.',
    cart: '',
    account: 'Tài liệu gốc không mô tả tab này, để trống.',
  };
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>{note[tab]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FFFFFF' },
  body: { flex: 1 },
  placeholder: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  placeholderText: { textAlign: 'center', color: '#5B6B7F' },
});
