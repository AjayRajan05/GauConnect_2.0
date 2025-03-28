import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Platform,
} from 'react-native';
import { Plus, X, QrCode } from 'lucide-react-native';

export default function CattleScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [cattleList] = useState([
    {
      id: '1',
      name: 'Ganga',
      breed: 'Gir',
      age: '4 years',
      status: 'Healthy',
    },
    {
      id: '2',
      name: 'Lakshmi',
      breed: 'Sahiwal',
      age: '3 years',
      status: 'Pregnant',
    },
  ]);

  const handleScanPress = () => {
    // For web platform, show a message about QR scanning limitations
    if (Platform.OS === 'web') {
      alert('QR code scanning is not available on web. Please use the mobile app for this feature.');
      return;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {cattleList.map((cattle) => (
          <TouchableOpacity key={cattle.id} style={styles.cattleCard}>
            <View>
              <Text style={styles.cattleName}>{cattle.name}</Text>
              <Text style={styles.cattleBreed}>{cattle.breed}</Text>
              <Text style={styles.cattleDetails}>Age: {cattle.age}</Text>
              <View style={styles.statusContainer}>
                <Text
                  style={[
                    styles.statusText,
                    { color: cattle.status === 'Healthy' ? '#16a34a' : '#2563eb' },
                  ]}>
                  {cattle.status}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.addButton, styles.scanButton]}
          onPress={handleScanPress}>
          <QrCode color="#ffffff" size={24} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}>
          <Plus color="#ffffff" size={24} />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add New Cattle</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <X size={24} color="#64748b" />
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Cattle Name"
              placeholderTextColor="#64748b"
            />
            <TextInput
              style={styles.input}
              placeholder="Breed"
              placeholderTextColor="#64748b"
            />
            <TextInput
              style={styles.input}
              placeholder="Age"
              placeholderTextColor="#64748b"
              keyboardType="numeric"
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.submitButtonText}>Add Cattle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  cattleCard: {
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
  cattleName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  cattleBreed: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
  },
  cattleDetails: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 8,
  },
  statusContainer: {
    marginTop: 8,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    flexDirection: 'row',
    gap: 12,
  },
  addButton: {
    backgroundColor: '#2563eb',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  scanButton: {
    backgroundColor: '#0891b2',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 12,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: '#1e293b',
  },
  submitButton: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});