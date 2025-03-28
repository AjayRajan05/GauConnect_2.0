import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Phone, MessageCircle } from 'lucide-react-native';

export default function MarketplaceScreen() {
  const listings = [
    {
      id: '1',
      title: 'Gir Cow for Sale',
      price: '₹45,000',
      location: 'Ahmedabad, Gujarat',
      image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=500&q=80',
      contact: '+91 98765 43210',
    },
    {
      id: '2',
      title: 'Sahiwal Breeding Bull',
      price: '₹65,000',
      location: 'Anand, Gujarat',
      image: 'https://images.unsplash.com/photo-1584935385440-748f730aa193?w=500&q=80',
      contact: '+91 98765 43211',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {listings.map((listing) => (
        <View key={listing.id} style={styles.listingCard}>
          <Image
            source={{ uri: listing.image }}
            style={styles.listingImage}
          />
          <View style={styles.listingDetails}>
            <Text style={styles.listingTitle}>{listing.title}</Text>
            <Text style={styles.listingPrice}>{listing.price}</Text>
            <Text style={styles.listingLocation}>{listing.location}</Text>
            
            <View style={styles.contactButtons}>
              <TouchableOpacity style={styles.contactButton}>
                <Phone size={20} color="#ffffff" />
                <Text style={styles.contactButtonText}>Call</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={[styles.contactButton, styles.whatsappButton]}>
                <MessageCircle size={20} color="#ffffff" />
                <Text style={styles.contactButtonText}>WhatsApp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  listingCard: {
    backgroundColor: '#ffffff',
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  listingImage: {
    width: '100%',
    height: 200,
  },
  listingDetails: {
    padding: 16,
  },
  listingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  listingPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563eb',
    marginTop: 8,
  },
  listingLocation: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  contactButtons: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 12,
  },
  contactButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  whatsappButton: {
    backgroundColor: '#25D366',
  },
  contactButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});