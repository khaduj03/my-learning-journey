import tkinter as tk
import requests

afghanistan_cities = {
    'Kabul': 'Kabul',
    'Kandahar': 'Kandahar',
    'Herat': 'Herat',
    'Mazar-i-Sharif': 'Mazar-i-Sharif',
    'Jalalabad': 'Jalalabad'
}


def get_weather():
    city = city_var.get()
    api_key = '1898ef0613f3369905e0542b652c010d'
    url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'

    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise error if not 200 OK
        weather_data = response.json()

        weather = weather_data['weather'][0]['main']
        temp_k = weather_data['main']['temp']
        temp_c = temp_k - 273.15  # Convert Kelvin to Celsius

        weather_info['text'] = f"Weather: {weather}\nTemperature: {temp_c:.1f}°C"
    except requests.exceptions.RequestException:
        weather_info['text'] = "Error: Unable to fetch weather data."
    except KeyError:
        weather_info['text'] = "Error: Invalid response format."


# Create the main window
root = tk.Tk()
root.title('Weather App')
root.geometry("300x200")

# Create GUI elements
city_label = tk.Label(root, text='Select a city in Afghanistan:')
city_label.pack(pady=5)

city_var = tk.StringVar(root)
city_var.set('Kabul')  # Default city
city_dropdown = tk.OptionMenu(root, city_var, *afghanistan_cities.values())
city_dropdown.pack(pady=5)

get_weather_button = tk.Button(root, text='Get Weather', command=get_weather)
get_weather_button.pack(pady=10)

weather_info = tk.Label(root, text='', font=('Arial', 12))
weather_info.pack(pady=10)

# Start the main loop
root.mainloop()
