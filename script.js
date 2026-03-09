// ==================== DATA STORE ====================
const store = {
    user: null,
    pets: [
        { id: 1, name: 'Buddy', species: 'dog', breed: 'Golden Retriever', age: 3, weight: 28, image: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/1fe085750-ac85-4d3c-9833-a1a92e802059.png', notes: 'Friendly, loves treats' },
        { id: 2, name: 'Whiskers', species: 'cat', breed: 'Persian', age: 2, weight: 4.5, image: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/172dcd6c9-6f42-43a6-b316-7eae0e86ea0e.png', notes: 'Shy, needs gentle handling' }
    ],
    appointments: [
        { id: 1, petId: 1, petName: 'Buddy', service: 'veterinary', date: '2026-02-15', time: '10:00', vet: 'Dr. Sarah', status: 'confirmed', notes: 'Annual checkup' },
        { id: 2, petId: 2, petName: 'Whiskers', service: 'grooming', date: '2026-02-18', time: '14:00', vet: 'Groomer Mike', status: 'pending', notes: 'Full grooming package' },
        { id: 3, petId: 1, petName: 'Buddy', service: 'vaccination', date: '2026-02-10', time: '09:00', vet: 'Dr. John', status: 'completed', notes: 'Rabies vaccine' }
    ],
    products: [
        { id: 1, name: 'Premium Dog Food', category: 'food', price: 45.99, image: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/1fdb7d68f-1b05-4cb2-8269-807c6e7538ee.png', rating: 4.8, reviews: 234 },
        { id: 2, name: 'Interactive Cat Toy', category: 'toys', price: 15.99, image: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/1fdb7d68f-1b05-4cb2-8269-807c6e7538ee.png', rating: 4.5, reviews: 189 },
        { id: 3, name: 'Pet Collar - Premium', category: 'accessories', price: 24.99, image: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/1fdb7d68f-1b05-4cb2-8269-807c6e7538ee.png', rating: 4.7, reviews: 156 },
        { id: 4, name: 'Vitamin Supplements', category: 'healthcare', price: 32.50, image: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/1fdb7d68f-1b05-4cb2-8269-807c6e7538ee.png', rating: 4.9, reviews: 312 },
        { id: 5, name: 'Plush Dog Bed', category: 'accessories', price: 59.99, image: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/1fdb7d68f-1b05-4cb2-8269-807c6e7538ee.png', rating: 4.6, reviews: 198 },
        { id: 6, name: 'Cat Litter Premium', category: 'healthcare', price: 18.99, image: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/1fdb7d68f-1b05-4cb2-8269-807c6e7538ee.png', rating: 4.4, reviews: 267 },
        { id: 7, name: 'Chew Toys Set', category: 'toys', price: 22.99, image: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/1bc7e3ad1-ae39-4bc9-a656-61152d1679a0.png', rating: 4.7, reviews: 145 },
        { id: 8, name: 'Organic Cat Food', category: 'food', price: 38.99, image: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/1c6e6fcc1-8a13-4ab1-bf9d-f44ccf0bebf8.png', rating: 4.8, reviews: 289 }
    ],
    services: [
        { id: 1, name: 'Veterinary Consultation', description: 'Complete health examination by certified vets', price: 50, duration: '30 min', icon: 'ri-stethoscope-line', color: 'gradient-primary' },
        { id: 2, name: 'Full Grooming Package', description: 'Bath, haircut, nail trimming, and ear cleaning', price: 65, duration: '90 min', icon: 'ri-scissors-line', color: 'gradient-secondary' },
        { id: 3, name: 'Vaccination', description: 'All essential vaccines for your pet', price: 45, duration: '20 min', icon: 'ri-syringe-line', color: 'gradient-success' },
        { id: 4, name: 'Daycare - Full Day', description: 'Supervised play and care throughout the day', price: 35, duration: '8 hours', icon: 'ri-home-heart-line', color: 'bg-gradient-to-r from-yellow-400 to-orange-500' },
        { id: 5, name: 'Dental Care', description: 'Professional teeth cleaning and oral health check', price: 80, duration: '45 min', icon: 'ri-tooth-line', color: 'bg-gradient-to-r from-pink-400 to-red-500' },
        { id: 6, name: 'Emergency Care', description: '24/7 emergency veterinary services', price: 150, duration: 'As needed', icon: 'ri-ambulance-line', color: 'bg-gradient-to-r from-red-500 to-orange-500' }
    ],
    cart: []
};

// ==================== NAVIGATION ====================
function navigateTo(section) {
    // Hide all sections
    ['home', 'services', 'appointments', 'pets', 'shop', 'dashboard'].forEach(s => {
        document.getElementById(`${s}-section`).classList.add('hidden');
    });

    // Show target section
    document.getElementById(`${section}-section`).classList.remove('hidden');

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Mark current section link as active
    const activeLink = document.querySelector(`a[onclick="navigateTo('${section}')"]`);
    if(activeLink) activeLink.classList.add('active');

    // Render section-specific content
    if (section === 'services') renderServices();
    if (section === 'appointments') renderAppointments();
    if (section === 'pets') renderPets();
    if (section === 'shop') renderShop();
    if (section === 'dashboard') renderDashboard();

    // Scroll to top
    window.scrollTo(0, 0);

    // Close mobile menu if open
    closeMobileMenu();
}

// ==================== AUTH ====================
function openModal(modalId) {
    document.getElementById(`${modalId}-modal`).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(`${modalId}-modal`).classList.add('hidden');
}

function switchModal(from, to) {
    closeModal(from);
    setTimeout(() => openModal(to), 200);
}

function handleLogin(e) {
    e.preventDefault();
    // Simulate login
    store.user = { name: 'John Doe', email: 'john@example.com', role: 'Pet Owner' };
    updateAuthUI();
    closeModal('login');
    showToast('Welcome back, John!', 'success');
}

function handleRegister(e) {
    e.preventDefault();
    // Simulate registration
    store.user = { name: 'New User', email: 'new@example.com', role: 'Pet Owner' };
    updateAuthUI();
    closeModal('register');
    showToast('Account created successfully!', 'success');
}

function logout() {
    store.user = null;
    updateAuthUI();
    toggleUserDropdown();
    showToast('Logged out successfully', 'info');
}

function updateAuthUI() {
    const authButtons = document.getElementById('auth-buttons');
    const userMenu = document.getElementById('user-menu');
    const userName = document.getElementById('user-name');
    const userRole = document.getElementById('user-role');

    if (store.user) {
        authButtons.classList.add('hidden');
        userMenu.classList.remove('hidden');
        userName.textContent = store.user.name;
        userRole.textContent = store.user.role;
    } else {
        authButtons.classList.remove('hidden');
        userMenu.classList.add('hidden');
    }
}

function toggleUserDropdown() {
    const dropdown = document.getElementById('user-dropdown');
    dropdown.classList.toggle('hidden');
}

// ==================== SERVICES ====================
function renderServices() {
    const grid = document.querySelector('#services-grid');
    if(grid) {
        grid.innerHTML = store.services.map(service => `
            <div class="glass-card rounded-3xl p-6 card-hover cursor-pointer" onclick="openModal('appointment')">
                <div class="w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4">
                    <i class="${service.icon} text-white text-3xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">${service.name}</h3>
                <p class="text-gray-600 text-sm mb-4">${service.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-orange-500">$${service.price}</span>
                    <span class="text-sm text-gray-500">${service.duration}</span>
                </div>
                <button class="w-full mt-4 btn-primary text-white font-semibold py-3 rounded-xl transition">
                    Book Now
                </button>
            </div>
        `).join('');
    }
}

// ==================== APPOINTMENTS ====================
function renderAppointments() {
    const table = document.getElementById('appointments-table');

    if (store.appointments.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="6" class="px-6 py-12 text-center text-gray-500">
                    <i class="ri-calendar-line text-5xl text-gray-300 mb-4"></i>
                    <p>No appointments yet. Book your first appointment!</p>
                </td>
            </tr>
        `;
    } else {
        table.innerHTML = store.appointments.map(appt => `
            <tr class="hover:bg-gray-50 transition">
                <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                            <i class="ri-paw-print-line text-orange-500"></i>
                        </div>
                        <span class="font-semibold text-gray-900">${appt.petName}</span>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <span class="capitalize font-medium text-gray-700">${appt.service}</span>
                </td>
                <td class="px-6 py-4">
                    <div class="text-gray-900 font-medium">${appt.date}</div>
                    <div class="text-gray-500 text-sm">${appt.time}</div>
                </td>
                <td class="px-6 py-4 text-gray-700">${appt.vet}</td>
                <td class="px-6 py-4">
                    <span class="status-${appt.status} text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                        ${appt.status}
                    </span>
                </td>
                <td class="px-6 py-4">
                    <div class="flex gap-2">
                        ${appt.status === 'pending' ? `
                            <button onclick="updateAppointmentStatus(${appt.id}, 'confirmed')" class="p-2 text-green-500 hover:bg-green-50 rounded-lg transition" title="Confirm">
                                <i class="ri-checkbox-circle-line"></i>
                            </button>
                            <button onclick="updateAppointmentStatus(${appt.id}, 'cancelled')" class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition" title="Cancel">
                                <i class="ri-close-circle-line"></i>
                            </button>
                        ` : ''}
                        <button onclick="deleteAppointment(${appt.id})" class="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition" title="Delete">
                            <i class="ri-delete-bin-line"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    // Update stats
    updateAppointmentStats();
}

function updateAppointmentStats() {
    const total = store.appointments.length;
    const upcoming = store.appointments.filter(a => a.status === 'pending' || a.status === 'confirmed').length;
    const completed = store.appointments.filter(a => a.status === 'completed').length;
    const cancelled = store.appointments.filter(a => a.status === 'cancelled').length;

    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-upcoming').textContent = upcoming;
    document.getElementById('stat-completed').textContent = completed;
    document.getElementById('stat-cancelled').textContent = cancelled;
}

function handleAppointment(e) {
    e.preventDefault();
    const petSelect = document.getElementById('appt-pet');
    const petName = petSelect.options[petSelect.selectedIndex].text.split(' (')[0];

    const newAppointment = {
        id: Date.now(),
        petId: parseInt(petSelect.value),
        petName: petName,
        service: document.getElementById('appt-service').value,
        date: document.getElementById('appt-date').value,
        time: document.getElementById('appt-time').value,
        vet: 'Dr. Pending',
        status: 'pending',
        notes: document.getElementById('appt-notes').value
    };

    store.appointments.push(newAppointment);
    closeModal('appointment');
    renderAppointments();
    showToast('Appointment booked successfully!', 'success');
    e.target.reset();
}

function updateAppointmentStatus(id, status) {
    const appt = store.appointments.find(a => a.id === id);
    if (appt) {
        appt.status = status;
        renderAppointments();
        showToast(`Appointment ${status}!`, 'success');
    }
}

function deleteAppointment(id) {
    if (confirm('Are you sure you want to delete this appointment?')) {
        store.appointments = store.appointments.filter(a => a.id !== id);
        renderAppointments();
        showToast('Appointment deleted', 'info');
    }
}

// ==================== PETS ====================
function renderPets() {
    const grid = document.getElementById('pets-grid');

    if (store.pets.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="ri-paw-print-line text-6xl text-gray-300 mb-4"></i>
                <p class="text-gray-500 mb-4">No pets added yet</p>
                <button onclick="openModal('pet')" class="btn-primary text-white px-6 py-3 rounded-full font-semibold">
                    Add Your First Pet
                </button>
            </div>
        `;
        return;
    }

    grid.innerHTML = store.pets.map(pet => `
        <div class="glass-card rounded-3xl overflow-hidden card-hover">
            <div class="h-48 bg-gradient-to-br from-orange-100 to-pink-100 relative">
                <img src="${pet.image}" alt="${pet.name}" class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 flex gap-2">
                    <button onclick="editPet(${pet.id})" class="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition">
                        <i class="ri-edit-line text-gray-700"></i>
                    </button>
                    <button onclick="deletePet(${pet.id})" class="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-red-50 transition">
                        <i class="ri-delete-bin-line text-red-500"></i>
                    </button>
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900">${pet.name}</h3>
                        <p class="text-gray-500 text-sm capitalize">${pet.species} • ${pet.breed}</p>
                    </div>
                    <span class="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                        ${pet.age} years
                    </span>
                </div>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="bg-gray-50 rounded-xl p-3">
                        <p class="text-xs text-gray-500">Weight</p>
                        <p class="font-bold text-gray-900">${pet.weight} kg</p>
                    </div>
                    <div class="bg-gray-50 rounded-xl p-3">
                        <p class="text-xs text-gray-500">Appointments</p>
                        <p class="font-bold text-gray-900">${store.appointments.filter(a => a.petId === pet.id).length}</p>
                    </div>
                </div>
                ${pet.notes ? `<p class="text-sm text-gray-600 bg-yellow-50 p-3 rounded-xl"><i class="ri-information-line text-yellow-500 mr-1"></i>${pet.notes}</p>` : ''}
                <button onclick="openModal('appointment')" class="w-full mt-4 btn-primary text-white font-semibold py-3 rounded-xl transition">
                    <i class="ri-calendar-check-line mr-2"></i>Book Appointment
                </button>
            </div>
        </div>
    `).join('');
}

function handleAddPet(e) {
    e.preventDefault();
    const species = document.getElementById('pet-species').value;
    const petImages = {
        dog: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/1fe085750-ac85-4d3c-9833-a1a92e802059.png',
        cat: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/172dcd6c9-6f42-43a6-b316-7eae0e86ea0e.png',
        bird: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/1c48e87c3-d33b-47e5-b274-24c4f130fcce.png',
        rabbit: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/1c48e87c3-d33b-47e5-b274-24c4f130fcce.png',
        other: 'https://image.qwenlm.ai/public_source/d38860c7-8817-4813-8aed-dbb8cc68d42b/1c48e87c3-d33b-47e5-b274-24c4f130fcce.png'
    };

    const newPet = {
        id: Date.now(),
        name: document.getElementById('pet-name').value,
        species: species,
        breed: document.getElementById('pet-breed').value,
        age: parseInt(document.getElementById('pet-age').value),
        weight: parseFloat(document.getElementById('pet-weight').value) || 0,
        image: petImages[species],
        notes: document.getElementById('pet-notes').value
    };

    store.pets.push(newPet);
    updatePetSelect(); // Update the dropdown in the appointment modal
    closeModal('pet');
    renderPets();
    showToast('Pet profile created!', 'success');
    e.target.reset();
}

function deletePet(id) {
    if (confirm('Are you sure you want to delete this pet profile?')) {
        store.pets = store.pets.filter(p => p.id !== id);
        updatePetSelect();
        renderPets();
        showToast('Pet deleted', 'info');
    }
}

function editPet(id) {
    showToast('Edit feature coming soon!', 'info');
}

// ==================== SHOP ====================
function renderShop() {
    const filter = document.getElementById('product-filter')?.value || 'all';
    const search = document.getElementById('product-search')?.value.toLowerCase() || '';
    const grid = document.getElementById('products-grid');

    let filtered = store.products;
    if (filter !== 'all') {
        filtered = filtered.filter(p => p.category === filter);
    }
    if (search) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="ri-shopping-basket-line text-6xl text-gray-300 mb-4"></i>
                <p class="text-gray-500">No products found</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(product => `
        <div class="glass-card rounded-2xl overflow-hidden card-hover">
            <div class="h-48 bg-gray-100 relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                <span class="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-orange-500">
                    $${product.price}
                </span>
            </div>
            <div class="p-4">
                <h3 class="font-bold text-gray-900 mb-1">${product.name}</h3>
                <div class="flex items-center gap-1 mb-3">
                    <i class="ri-star-fill text-yellow-400 text-sm"></i>
                    <span class="text-sm text-gray-600">${product.rating} (${product.reviews})</span>
                </div>
                <button onclick="addToCart(${product.id})" class="w-full btn-primary text-white font-semibold py-2.5 rounded-xl transition flex items-center justify-center gap-2">
                    <i class="ri-add-line"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// ==================== CART ====================
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');

    if (sidebar.classList.contains('translate-x-full')) {
        sidebar.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    }
}

function addToCart(productId) {
    const product = store.products.find(p => p.id === productId);
    const existing = store.cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity++;
    } else {
        store.cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(`${product.name} added to cart!`, 'success');
}

function removeFromCart(index) {
    store.cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    const totalItems = store.cart.reduce((sum, item) => sum + item.quantity, 0);

    if (totalItems > 0) {
        cartCount.textContent = totalItems;
        cartCount.classList.remove('scale-0');
    } else {
        cartCount.classList.add('scale-0');
    }

    if (store.cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center text-gray-500 mt-10">
                <i class="ri-shopping-basket-line text-5xl text-gray-300 mb-4"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        cartTotal.textContent = '$0.00';
        return;
    }

    let total = 0;
    cartItems.innerHTML = store.cart.map((item, index) => {
        total += item.price * item.quantity;
        return `
            <div class="flex gap-4 items-center bg-white p-3 rounded-xl border border-gray-100">
                <img src="${item.image}" class="w-16 h-16 rounded-lg object-cover">
                <div class="flex-1">
                    <h4 class="font-bold text-gray-800 text-sm">${item.name}</h4>
                    <p class="text-orange-500 font-bold">$${item.price} x ${item.quantity}</p>
                </div>
                <button onclick="removeFromCart(${index})" class="text-gray-400 hover:text-red-500 p-2">
                    <i class="ri-delete-bin-line"></i>
                </button>
            </div>
        `;
    }).join('');

    cartTotal.textContent = '$' + total.toFixed(2);
}

function checkout() {
    if (store.cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    if (!store.user) {
        showToast('Please login to checkout', 'error');
        openModal('login');
        return;
    }
    showToast('Order placed successfully!', 'success');
    store.cart = [];
    updateCartUI();
    toggleCart();
}

// ==================== DASHBOARD ====================
function renderDashboard() {
    // Render admin appointments table
    const tbody = document.getElementById('admin-appointments');
    tbody.innerHTML = store.appointments.slice(0, 5).map(appt => `
        <tr class="hover:bg-gray-50">
            <td class="px-4 py-3 font-medium">${appt.petName}</td>
            <td class="px-4 py-3 text-gray-600">Owner</td>
            <td class="px-4 py-3 capitalize">${appt.service}</td>
            <td class="px-4 py-3">${appt.date}</td>
            <td class="px-4 py-3">
                <span class="status-${appt.status} text-white px-2 py-1 rounded-full text-xs">${appt.status}</span>
            </td>
        </tr>
    `).join('');

    // Initialize charts
    setTimeout(initCharts, 100);
}

function initCharts() {
    // Appointments Chart
    const apptCtx = document.getElementById('appointments-chart');
    if (apptCtx) {
        new Chart(apptCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Appointments',
                    data: [8, 12, 15, 10, 18, 22, 14],
                    borderColor: '#f97316',
                    backgroundColor: 'rgba(249, 115, 22, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // Services Chart
    const servicesCtx = document.getElementById('services-chart');
    if (servicesCtx) {
        new Chart(servicesCtx, {
            type: 'doughnut',
            data: {
                labels: ['Veterinary', 'Grooming', 'Daycare', 'Vaccination'],
                datasets: [{
                    data: [35, 25, 20, 20],
                    backgroundColor: ['#f97316', '#ec4899', '#8b5cf6', '#06b6d4'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }
}

// ==================== UTILITIES ====================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');

    toastMessage.textContent = message;

    if (type === 'success') {
        toastIcon.className = 'ri-checkbox-circle-fill text-green-500 text-2xl';
    } else if (type === 'error') {
        toastIcon.className = 'ri-error-warning-fill text-red-500 text-2xl';
    } else {
        toastIcon.className = 'ri-information-fill text-blue-500 text-2xl';
    }

    toast.classList.remove('translate-y-20', 'opacity-0');

    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

function closeMobileMenu() {
    // Mobile menu handling if needed
}

// Populate pet select in appointment modal
function updatePetSelect() {
    const select = document.getElementById('appt-pet');
    if (select) {
        select.innerHTML = store.pets.map(pet =>
            `<option value="${pet.id}">${pet.name} (${pet.breed})</option>`
        ).join('');
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    updateAuthUI();
    updatePetSelect();

    // Set minimum date for appointment
    const dateInput = document.getElementById('appt-date');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }

    // Search functionality
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', renderShop);
    }
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('user-dropdown');
    const userMenu = document.querySelector('#user-menu .w-10');
    if (dropdown && !dropdown.contains(e.target) && userMenu && !userMenu.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});