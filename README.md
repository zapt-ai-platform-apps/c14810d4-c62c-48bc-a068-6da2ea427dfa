# New App

## Overview

New App is a Quran reader application that allows users to read the Quran in Arabic with English translation. Users can browse through the list of Surahs (chapters), select any Surah to view its Ayahs (verses), and read them along with their translations.

## User Journeys

### 1. Viewing the List of Surahs

- **Step 1:** Upon opening the app, users are presented with a list of all 114 Surahs of the Quran.
- **Step 2:** Each Surah displays its number, English name, and Arabic name.
- **Step 3:** Users can scroll through the list to find a Surah they wish to read.

### 2. Selecting a Surah

- **Step 1:** Users select a Surah by clicking on it from the list.
- **Step 2:** The selected Surah is highlighted to indicate selection.
- **Step 3:** The app fetches and displays the Ayahs (verses) of the selected Surah.

### 3. Reading Ayahs

- **Step 1:** Users can read the Ayahs in Arabic script, displayed prominently.
- **Step 2:** Below each Arabic Ayah, the English translation is provided.
- **Step 3:** Users can scroll through the Ayahs to read the entire Surah.

### 4. Switching Surahs

- **Step 1:** Users can return to the Surah list at any time.
- **Step 2:** Users select a different Surah from the list.
- **Step 3:** The app updates to display the Ayahs of the newly selected Surah.

## External APIs Used

The app uses the [Al Quran Cloud API](https://alquran.cloud/api) to fetch Quranic text and translations.

- **Purpose:** To retrieve the list of Surahs and the Ayahs for each Surah in both Arabic and English translation.
- **Endpoint Examples:**
  - Fetch list of Surahs: `https://api.alquran.cloud/v1/surah`
  - Fetch Ayahs of a Surah: `https://api.alquran.cloud/v1/surah/{surah_number}/editions/quran-uthmani,en.asad`

## Technologies Used

- **SolidJS:** A reactive JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **Vite:** A build tool that provides a fast development environment.
- **Al Quran Cloud API:** For fetching Quranic data.

## Environment Variables

No environment variables are required for this app.

## Running the App

1. Install dependencies:

   ```
   npm install
   ```

2. Start the development server:

   ```
   npm run dev
   ```

3. Open the app in your browser at `http://localhost:3000`.

---

This app is free to use and does not require authentication.