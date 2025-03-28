import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Phone, MessageCircle, Star } from 'lucide-react-native';

export default function VeterinaryScreen() {
  const vets = [
    {
      id: '1',
      name: 'Dr. Patel',
      specialization: 'Large Animal Specialist',
      experience: '15 years',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&q=80',
      contact: '+91 98765 43210',
    },
    {
      id: '2',
      name: 'Dr. Shah',
      specialization: 'Cattle Reproduction Expert',
      experience: '12 years',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80',
      contact: '+91 98765 43211',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {vets.map((vet) => (
        <View key={vet.id} style={styles.vetCard}>
          <View style={styles.vetHeader}>
            <Image
              source={{ uri: vet.image }}
              style={styles.vetImage}
            />
            <View style={styles.vetInfo}>
              <Text style={styles.vetName}>{vet.name}</Text>
              <Text style={styles.vetSpecialization}>{vet.specialization}</Text>
              <View style={styles.ratingContainer}>
                <Star size={16} color="#facc15" fill="#facc15" />
                <Text style={styles.ratingText}>{vet.rating}</Text>
              </View>
              <Text style={styles.experience}>{vet.experience} experience</Text>
            </View>
          </View>

          <View style={styles.contactButtons}>
            <TouchableOpacity style={styles.contactButton}>
              <Phone size={20} color="#ffffff" />
              <Text style={styles.contactButtonText}>Call Now</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.contactButton, styles.whatsappButton]}>
              <MessageCircle size={20} color="#ffffff" />
              <Text style={styles.contactButtonText}>WhatsApp</Text>
            </TouchableOpacity>
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
  vetCard: {
    backgroundColor: '#ffffff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  vetHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  vetImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  vetInfo: {
    marginLeft: 16,
    flex: 1,
  },
  vetName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  vetSpecialization: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingText: {
    marginLeft: 4,
    color: '#64748b',
  },
  experience: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  contactButtons: {
    flexDirection: 'row',
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